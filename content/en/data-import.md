# Import Data

If your church already has a member list in a spreadsheet, Import Data lets you bring it in
instead of retyping everyone by hand. It currently imports **Members only**.

## The four steps

### 1. Upload

Export your spreadsheet as a **CSV file** (from Excel, Google Sheets, or almost any other
church system) and upload it here. Files over **500 rows** are rejected up front — split a
larger file and import it in batches.

### 2. Map your columns

For every column in your file, choose which HolyCRM field it should fill (first name, last
name, email, phone, birthdate, status, tags, and more). HolyCRM guesses sensible matches
automatically from your column headers (including some common Spanish/Portuguese headers
like "Apellido" or "Nome"), but always double-check the guesses before continuing.

A sample of each column's actual values is shown next to it, since a header alone
("Status", "Estado") doesn't always tell you what's really in the cells.

**First name** and **last name** are the only required mappings — everything else is
optional.

### 3. Preview

See exactly what will be created — name, email, and a status per row:

- **Ready** — will import cleanly.
- **Ready with a warning** — something minor was skipped (e.g. an unreadable date), the row
  still imports.
- **Error** — missing first or last name; this row will be skipped entirely.

### 4. Import

Rows are created a few at a time with a live progress count. When it's done you'll see a
created/skipped summary with the reason for every skip.

## Good to know before you import

- **No duplicate checking.** Every import creates brand-new member records — there's no
  matching against people already in your directory. If you're not sure whether someone's
  already in HolyCRM, check first; importing them again creates a second record.
- **Tags are created automatically** if a tag name in your file doesn't already exist in
  your church.
- **Locations are matched by name only, never created automatically.** If a location name
  in your file doesn't match one you've already set up, that field is left blank for that
  row (with a warning) rather than creating a half-configured location record.
- **Dates**: HolyCRM does its best to read birthdates in either day-first or month-first
  format, but this is a best-effort guess — it's worth spot-checking a few birthdates after
  a real import.
- Minor status (`is_minor`) is worked out automatically from the imported birthdate using
  your church's configured age cutoff — see [Members](#/members).

## What it can't do (yet)

Importing anything other than Members (Visitors, Giving history, etc.), Excel `.xlsx` files
directly (export to CSV first), or matching/updating existing records instead of always
creating new ones.
