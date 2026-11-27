/**
 * Google Apps Script for DTU Merch Reservations Sheet
 * Sheet URL: https://docs.google.com/spreadsheets/d/1QVuh69GuBCRsu_iYYmHqTrTqj1GhqavBiRUu6sWNk4M/edit?gid=0#gid=0
 *
 * Setup:
 * 1. Open the Google Sheet -> Extensions -> Apps Script.
 * 2. Replace Code.gs with this script and Save.
 * 3. Click Deploy -> New deployment -> Type: Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL (ends in /exec) and set it as GOOGLE_SHEETS_WEBHOOK_URL
 *    in .env.local and in Vercel Project Settings -> Environment Variables.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // gid=0 first sheet
    var data = JSON.parse(e.postData.contents);

    // Ensure extra helper column headers (K2:O2) exist without touching A2:J2
    var extraHeaders = [
      "Reservation ID",
      "Order Summary",
      "Roll No & Branch",
      "UPI App & Payer",
      "Timestamp (IST)"
    ];
    for (var i = 0; i < extraHeaders.length; i++) {
      var headerCell = sheet.getRange(2, 11 + i);
      if (!headerCell.getValue()) {
        headerCell.setValue(extraHeaders[i]);
      }
    }

    // Find the first row >= 3 where Column B (Name of Customer) is empty
    // so pre-numbered S.N. rows (1, 2, 3...) are filled in cleanly without gaps.
    var lastRow = Math.max(sheet.getLastRow(), 2);
    var targetRow = lastRow + 1;
    if (lastRow >= 3) {
      var names = sheet.getRange(3, 2, lastRow - 2, 1).getValues();
      for (var r = 0; r < names.length; r++) {
        if (!String(names[r][0] || "").trim()) {
          targetRow = r + 3;
          break;
        }
      }
    }

    // Fill S.N. in Column A only if blank
    var snCell = sheet.getRange(targetRow, 1);
    if (!String(snCell.getValue() || "").trim()) {
      snCell.setValue(targetRow - 2);
    }

    // Columns B..H: Name, whatsapp number, advance, UTR, Type, Customization details, balance amount
    // (Leaves Columns I & J: advance payment status, balance payment status blank for manual fill)
    sheet.getRange(targetRow, 2, 1, 7).setValues([[
      data.customerName || "",
      "'" + String(data.whatsappNumber || ""),
      Number(data.advanceAmount || 0),
      "'" + String(data.utr || ""),
      data.hoodieType || "",
      data.customizationDetails || "",
      Number(data.balanceAmount || 0)
    ]]);

    // Columns K..O: Reservation ID, Order Summary, Roll No & Branch, UPI App & Payer, Timestamp (IST)
    sheet.getRange(targetRow, 11, 1, 5).setValues([[
      data.reservationId || "",
      data.orderSummary || "",
      data.rollNoAndBranch || "",
      data.upiAppAndPayer || "",
      data.timestampIst || ""
    ]]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, row: targetRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

