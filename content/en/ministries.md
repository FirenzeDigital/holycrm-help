# Ministries & Ministry Members

A **Ministry** is a standing team — Worship, Kids, Ushers, Tech, and so on. Ministries hold
the group identity; **Ministry Members** and **Ministry Activities** hang off a ministry.

## Ministries

Create a ministry with a name, a **Leader**, and optional **age band** (`Min age` /
`Max age`). The leader picker, if your church has mapped the `ministry_leader` tag role
(see [Tags & Tag Roles](#/tags)), only offers members carrying that tag; otherwise everyone
is offered.

The age band is used by **Kids Check-in** to narrow who can be checked into that ministry's
sessions — for example, a "Kids Ministry" banded 0–12 won't offer a 15-year-old, even though
they're still a minor; that teenager would show up correctly under a "Youth Ministry"
banded 13–17. Leave both blank for a ministry with no age restriction (the default). See
[Attendance & Check-in](#/attendance) for how this plays out at check-in time.

## Ministry Activities

A ministry's recurring or one-time meetings/services (e.g. "Sunday Worship Service, weekly
at 10am"). One activity row covers the whole recurring series — there isn't a separate row
per week. Activities are what [Attendance](#/attendance), [Rotas](#/rotas) and the
[Calendar](#/calendar) all schedule against.

## Ministry Members

Pick a ministry from the dropdown, and manage who's on it — add a member with a role
(leader, co-leader, volunteer), or remove them. Removing takes them off the roster
immediately; it doesn't just mark them inactive.

This roster is what powers **Attendance**'s auto-prefilled roster for a ministry
activity — add someone here first, and they'll already be listed when you go to take
attendance for that ministry's next gathering.

## What's not built yet

Changing a member's role after adding them (remove and re-add instead), viewing/managing
members who were removed, and bulk-adding a whole tagged group at once.
