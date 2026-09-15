# Attendance & Check-in

Three related screens cover attendance, depending on what you're tracking:

| Screen | Use it for |
|---|---|
| **Attendance** | Recording who attended an event, ministry activity, or small group meeting — the general-purpose roster tool. |
| **Check-in** | A fast front-desk flow for services/events open to anyone — search, check in, print a tag. |
| **Kids Check-in** | The same front-desk flow, but restricted to minors, with a matching guardian tag. |

All three ultimately write to the same underlying attendance records, so a session started
in one shows up correctly in the others' history too.

## Attendance

**+ Take attendance** → choose what you're taking attendance for:

- **Service/Event** — pick from events in the last/next 90 days.
- **Ministry activity** — pick the activity and a date (a weekly activity is one series, so
  you pick which week).
- **Small group meeting** — pick the group and a date; a meeting record is created
  automatically if one doesn't exist yet for that date.

The roster pre-fills from the relevant membership list (a group's members, or a ministry's
members from [Ministry Members](#/ministries)) — events have no membership concept, so
their roster starts empty. A **search box** lets you add anyone by name regardless, useful
for a substitute or a first-time attendee. Mark each person Present, Absent, Late or
Excused (or **Mark all present**), then **Save attendance** — nothing is written until you
save.

The sessions list shows your recent sessions with a present/total count; click one to
reopen and edit it.

## Check-in

A faster flow for a service, conference, or any event **not** restricted to minors. Pick a
type (Service/Event or Ministry activity) and a date, then search and tap to check someone
in — this prints a tag with a short pickup code. If the occurrence is an event with people
pre-registered (see [Events & Registrations](#/events)), they show up in a
**Pre-registered** shortcut list above the search box.

## Kids Check-in

The same flow, but only ever surfaces **minors** as checkable — an adult who isn't a minor
and isn't listed as anyone's guardian never appears in search results at all. Searching by
a parent's name finds their children (via the **Guardians** field set on the child's own
Member record — see [Members](#/members)); searching by a child's own name finds them
directly.

Checking a child in prints **two matching tags** — one for the child, one for the guardian
— each showing the same pickup code large enough to read across a table. At pickup, a
volunteer compares the guardian's tag stub against the child's, and taps **Check out**.

If the selected ministry session has an **age band** set (see
[Ministries & Ministry Members](#/ministries)), only children within that age range are
offered, even if they're a minor by the church-wide definition.

**There's no scanner or label printer integration** — a "tag" is a piece of paper from your
regular printer, and the security model is a human visually comparing two printed codes.
That matches how most churches already run paper tag stubs; this just keeps the record
digital.

## Setting up who counts as a minor

See [Members](#/members) — a member is a minor once their birth date is below your church's
configured cutoff (Church Settings → Minor age cutoff), or via a manual checkbox if they
have no birth date on file. Guardians can only be set on someone once they're marked a
minor.

## What's not built yet

Editing or removing a guardian link from the check-in screen itself (do that from the
child's own Member record instead), running multiple simultaneous check-in sessions on one
screen, hardware scanner/printer integration, and attendance trend reports beyond the
simple sessions list.
