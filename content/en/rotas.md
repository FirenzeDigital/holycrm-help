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

## Seeing what needs coverage

The [Calendar](#/calendar)'s **rota focus** control has a **needs volunteers** view —
anything where fewer people are assigned than required shows up there, color-coded, with a
"Role — assigned / required" breakdown in the event details. The
[Dashboard](#/dashboard) also surfaces upcoming understaffed rotas.

Volunteer **double-booking** is also detected automatically — if the same person is assigned
to two overlapping duties, it's flagged as a scheduling clash on the calendar, regardless of
which location filter you have selected.

## What's not built yet

Individual accept/decline responses from volunteers, substitution history, moving or
cancelling a single occurrence of a recurring rota independently of the rest of the series,
and a fully event-linked staffing model (the current model links a rota to an event or
activity, but the deeper "series → occurrence → requirement" structure described in the
internal architecture notes hasn't been built).
