# Import Data

If your church already has its records in a spreadsheet, Import Data lets you bring them in
instead of retyping everything by hand. First choose **what you're importing**: **Members**,
**Visitors**, **Giving history** or **Groups**. Each has its own template and its own columns;
the steps below are the same for all four (see "Visitors, giving and groups" further down).

## Before you start

- **Use your file as it is.** Excel (`.xlsx`, `.xls`), LibreOffice (`.ods`) and CSV files
  all work. The columns can have any names and be in any order, and extra columns are fine:
  you choose what each one fills in the next step.
- **Starting from scratch?** Click **Download template** (Excel or CSV). It has the right
  columns, an example row and, in the Excel version, an *Instructions* sheet saying what to
  write in each column. Fill it in and import it here.
- **Custom fields first.** If your file has information HolyCRM has no field for (a baptism
  date, a membership class…), create a custom field for it in **Settings → Custom Fields**
  (full app) before importing. It then appears in the column list and in the template. The
  Import Data screen lists the custom fields you already have.

## The four steps

### 1. Upload

Upload the file. If an Excel file has several sheets with data, pick the one with your
people. The first row should be the column headers. Files over **500 rows** are rejected:
split a larger file and import it in batches.

### 2. Match your columns

For every column in your file, choose which HolyCRM field it fills — first name, last name,
email, phone, birth date, status, tags, location, your custom fields and more — or
**Don't import**. HolyCRM guesses the matches from your headers, in English, Spanish or
Portuguese ("Apellido", "Nome", "Celular"…), and a filled-in template matches itself. A
sample of each column's values is shown next to it, so you can check what's really in the
cells.

**First name** and **last name** are the only required fields.

### 3. Preview

See every row exactly as it will be saved, with all the columns you matched. Each row shows
whether it's **Ready**, ready with a **warning** (something small was left blank, like an
unreadable date; the row still imports), or has an **error** (no first or last name; the row
is skipped). Use **Show** to see only the rows with warnings, with errors, or people who are
already in HolyCRM.

### 4. Import

Rows are saved a few at a time with a live count. At the end you see how many people were
created, updated and skipped, and the reason for anything that failed.

## People who are already in HolyCRM

The preview checks every row against your directory:

- **Same person** — the same email, the same phone number (even written differently:
  `+54 9 11 5555-1234` and `11 5555 1234` match), or the same first and last name (accents
  and capitals don't matter).
- **Possible match** — a similar name: a typo ("Jonatan" / "Jonathan"), a nickname
  ("Pepe" / "José", "Bill" / "William"), a short name ("Ale" / "Alejandra",
  "Juanito" / "Juan"), or one surname of two ("María López" / "María López García").

For the **same person** rows, choose once what happens to all of them:

- **Skip them** (the default) — the existing records stay as they are.
- **Update the existing people** — fills in the columns from your file. Blank cells never
  erase anything, tags are added to the ones the person already has, and the person's
  **name is never changed**.
- **Import them as new people anyway.**

**Possible matches** are imported as new people unless you choose otherwise, because a
similar name can be a different person. Every matched row also has its own choice in the
table — **Skip**, **Update this person** or **Import as new** — so you can decide one by
one.

If the same person appears twice in your file, the second row shows a warning
("Looks like row 4"). Both rows are imported, so delete one from your file if needed. To
clean up people who were already entered twice, use [Find Duplicates](#/find-duplicates);
the summary screen has a button to open it.

## Good to know

- **Tags are created automatically** if a tag name in your file doesn't exist yet.
- **Locations are matched by name, never created.** If a location in your file doesn't
  match one you've set up, that cell is left blank, with a warning.
- **Dates:** a date cell from Excel is read exactly. Dates typed as text are read as
  day-first or month-first on a best-effort basis, so spot-check a few birthdates after
  importing. A CSV file keeps dates and long numbers the way the spreadsheet *displayed*
  them (`3/7/85`, `5.49E+12`), so upload the Excel file itself when you can.
- **Custom fields** are read by their type: a number, a date, yes/no, or one of the choices
  of a list field. A value that doesn't fit is left blank, with a warning.
- Minor status is worked out from the birth date with your church's age cutoff — see
  [Members](#/members).

## Visitors, giving and groups

- **Visitors** — first name (required), last name, email, phone, WhatsApp, address, first
  visit, how they found us, stage and notes. Visitors already in HolyCRM are spotted the same
  way as members.
- **Giving history** — one gift per row: date and amount are required. The **giver** is matched
  with your members by email or by first and last name; if nobody matches (or two people have
  that name), the gift is recorded without a giver and won't show in a person's giving
  statement. Amounts can be written `1500.00` or `1.500,00`. A blank currency means your
  church's; another currency needs an **exchange rate** column. A **category** that doesn't
  exist yet is created; blank uses your first income category. Gifts that are already in
  HolyCRM (same date, amount, giver and reference) are flagged, so importing the same file
  twice doesn't count them twice.
- **Groups** — name (required), type, leader (matched like a giver), meeting day and time,
  where they meet, host, description and status. A group with the same name as one you have
  can be skipped or updated.

## What it can't do (yet)

Import more than 500 rows at once, the members of each group, or expenses.
