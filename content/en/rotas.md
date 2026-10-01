# Rotas (Service Scheduling)

Rotas are how you schedule volunteers into service roles for a specific event or ministry
activity occurrence — "who's on Sound this Sunday," "who's greeting at the 9am service."

## The building blocks

1. **Service Roles** — define the roles your church schedules people into (Sound,
   Projection, Greeter, Kids Check-in Volunteer, etc.). Set these up once.
2. **Rotas (Role Requirements)** — say a role is needed for a specific Event or Ministry
   Activity, and how many people are needed. Reachable directly from the
   [Calendar](#/calendar)'s event panel, pre-filled with that event or activity.
3. **Rota Assignment** — who's actually filling that requirement. A rota linked to a
   requirement automatically inherits its date, time and location — you don't re-enter the
   schedule, just pick the volunteer(s).

**Who can be picked.** Type a name in **Volunteers** to search. New churches let any member
serve. If your church turned that off in Church Settings (*Any member can volunteer*), only
people marked as volunteers on their Members record appear; if nobody is marked yet, the form
tells you what to do. Availability never limits the list — it only suggests who fits best.

## Seeing what needs coverage

The [Calendar](#/calendar)'s **rota focus** control has a **needs volunteers** view —
anything where fewer people are assigned than required shows up there, color-coded, with a
"Role — assigned / required" breakdown in the event details. The
[Dashboard](#/dashboard) also surfaces upcoming understaffed rotas.

Volunteer **double-booking** is also detected automatically — if the same person is assigned
to two overlapping duties, it's flagged as a scheduling clash on the calendar, regardless of
which location filter you have selected.

## Planning the week

**Rotas** shows one week at a time — use **‹ This week ›** to move. Every service and activity
that happens that week is a card with its date and time, and weekly activities show up on
their actual date (for example *Fri 9 Oct · 20:00*), so you always know which day you're
filling.

- **Fill** (or **Edit**) opens a small window right on the board: search people by name, tap
  to add them, tap × to take someone off, and **Save**. You stay on the board.
- For weekly activities, a person is added **only for that date** unless you tick **Repeat
  every week**. People who serve every week show a 🔁 next to their name.
- **Copy last week** repeats last week's team on weekly activities, for the roles where
  people were scheduled just for that date. It only adds — nobody is removed.
- **+ Role** adds a role a service needs (and how many people). If the role doesn't exist yet,
  choose **New role…** and type its name. Services that don't have any roles yet are listed at
  the bottom under *Also this week, without roles*.
- If people have shared their availability, the window suggests who is free at that time —
  one tap adds them.

Volunteers see their own dates in [My serving](#/my-serving) and can confirm from there.

## Asking volunteers to confirm

On the **Rotas** board, each upcoming service has a **Confirmations** button showing how many
people have answered (for example *Confirmations · 3/5*). Open it to see everyone serving on
that date and where they stand: ✅ confirmed, ❌ can't make it, ⏳ waiting for an answer, or
not asked yet.

1. Click **Ask to confirm**. Everyone who has an email address gets an email with a button to
   confirm or say they can't make it. No login is needed — the link is personal to them.
2. For anyone without email, or who usually doesn't read it, click **WhatsApp** next to their
   name. WhatsApp opens on your phone or computer with the message already written, including
   their personal link — you just tap send. **Copy link** lets you send it any other way.
3. Answers appear on the board straight away, next to each name.
4. If someone hasn't answered when the service is less than a day away, they get one reminder
   email automatically.
5. If someone says they can't make it, the person who asked gets an email (with the
   volunteer's note, if they left one) so they can find a replacement.

For weekly activities, confirmations are for the **next** date the activity happens.

**WhatsApp and phone numbers:** set your **Phone country code** in
[Church Settings](#/church-settings) so numbers saved without it (like *11 5555-1234*) open
the right chat. In Argentina, mobile numbers need the 9 after the country code for WhatsApp
— the safest is to save them in full, like *+54 9 11 5555-1234*.

## What's not built yet

Substitution history, an automatic WhatsApp message without anyone tapping send, moving or
cancelling a single occurrence of a recurring rota independently of the rest of the series,
and a fully event-linked staffing model (the current model links a rota to an event or
activity, but the deeper "series → occurrence → requirement" structure described in the
internal architecture notes hasn't been built).
