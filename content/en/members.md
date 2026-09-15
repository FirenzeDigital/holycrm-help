# Members

Members is your church's directory — every person in your congregation, with their contact
details, status, and the tags/relationships that connect them to the rest of the app.

## Adding a member

Use **+ Member**, fill in the fields you know (only name is required), and save. You can
always come back and fill in more later.

Useful fields:

- **Status** — active, inactive, etc. Most reports and pickers only count *active* members.
- **Volunteer** — a checkbox marking someone as available to serve. This matters for rota
  scheduling — see [Ministries & Rotas](#/ministries).
- **Tags** — a flexible label picker (see [Tags & Tag Roles](#/tags)) for grouping people
  any way your church finds useful, beyond ministries and groups.
- **Birth Date** — used for birthday reminders and to automatically work out whether someone
  is a minor.

## Minors and guardians

If a member's birth date puts them below your church's configured "minor age cutoff"
(Church Settings → Minor age cutoff, default 18), a **Guardians** field appears on their
record — pick their parent(s)/guardian(s) from the rest of your members. This is what makes
**Kids Check-in** able to look someone up by their parent's name — see
[Attendance & Check-in](#/attendance).

If a member has no birth date on file, "minor" becomes a plain checkbox you can set by hand
instead of it being calculated automatically.

## Email is locked for members with a login

If a member also has a HolyCRM login (they're a Volunteer, Manager or Admin who signed in),
their email field is locked on the Members form with a note pointing you to the Users
screen instead. This is intentional: their login email and their member-record email are
kept in sync automatically, and editing it in two places would cause one edit to silently
undo the other. Change it from **Admin Settings → Users** instead — see
[Users, Roles & Permissions](#/users-roles).

## Bringing in members you already have

Don't retype your whole directory by hand — see [Import Data](#/data-import) to bring in a
spreadsheet.

## Searching and filtering

The Members list supports search and column filters (status, tags, etc.) so you can quickly
narrow down to, say, "active volunteers tagged Worship Team."
