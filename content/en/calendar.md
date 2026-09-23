# Calendar

The Calendar brings together everything with a schedule — Events, Ministry Activities and
Rotas — in one agenda, month, week or day view.

## Viewing timezone vs. venue timezone

Every schedule is anchored to the timezone of the **location** it happens at (falling back
to your church's own timezone if the location doesn't have one). That's the *venue* time and
it never changes.

Separately, you choose a **viewing timezone** for the calendar itself, in the
`Timezone` control:

- **Automatic** — uses the selected location's timezone, or your church's timezone when
  showing all locations.
- **Church** — always your church's configured timezone.
- **Device** — your computer or phone's own timezone.
- **Custom** — any timezone you pick.

If your viewing timezone differs from an event's venue timezone, the event details panel
shows both, so nobody mistakes a 7pm service in one timezone for 7pm in another.

This preference is remembered per person, per church, on the device you're using — it
doesn't change what time anything actually happens, only how it's displayed to you.

## Filtering and rota focus

- **Location filter** — narrow the calendar to one meeting location.
- **Rota focus** — switch between *all*, *needs volunteers* (rotas short on assigned
  people), or *scheduling clashes* (someone double-booked across overlapping duties,
  detected church-wide so the location filter can't hide it).

Understaffed and clashing rotas are color-coded on the calendar, with details in the event
panel when you click through.

## Creating and editing from the Calendar

Use **Add new** to create an Event, Ministry Activity or Rota directly — it opens the same
form used in the dedicated module for that item ([Events](#/events),
[Ministries & Rotas](#/ministries)), just pre-filled with the date/time you clicked. Editing
an item from the calendar is the same form as editing it from its own module.

**A note on recurring items**: editing a weekly Ministry Activity or Rota changes the whole
recurring series, not just one occurrence — there's currently no "just this week" edit.

## Mobile

On phones, the timezone controls and "Add new"/"Manage" shortcuts collapse into a
**More** panel so the agenda itself isn't pushed off-screen; tap to expand.

## Subscribing from your own calendar app

Want this schedule in your own Google, Apple or Outlook calendar instead of checking here?
See [Calendar Sync](#/calendar-sync).
