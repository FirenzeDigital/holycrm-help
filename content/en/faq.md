# Frequently Asked Questions

<details class="help-faq-item" open>
<summary>I can't see a menu item I expected to see. Why?</summary>

What you see depends on your role (Admin, Manager, Volunteer or Member) and any custom
permission your church has set for you. Ask an Admin or Manager to check
[Users, Roles & Permissions](#/users-roles) — either your role needs to change, or a custom
permission needs to be granted for that module.
</details>

<details class="help-faq-item">
<summary>How do I bring in members I already have in a spreadsheet?</summary>

Export your spreadsheet to CSV and use [Import Data](#/data-import) under People. You'll map
your columns to HolyCRM fields and preview exactly what will be created before anything is
saved. Note that it always creates new records — it doesn't check for people you may have
already entered by hand.
</details>

<details class="help-faq-item">
<summary>Why is a member's email field locked and I can't edit it?</summary>

That member also has a HolyCRM login (they're a Volunteer, Manager or Admin). Their login
email and member-record email are kept in sync automatically, so editing it from the Members
form would just get overwritten. Change it from **Admin Settings → Users** instead — see
[Users, Roles & Permissions](#/users-roles).
</details>

<details class="help-faq-item">
<summary>How does HolyCRM decide who's a "minor"?</summary>

Your church sets a **Minor age cutoff** in [Church Settings](#/church-settings) (default 18).
Any member with a birth date below that age is automatically treated as a minor throughout
the app — this is what makes the Guardians field and Kids Check-in eligibility work. A
member with no birth date on file falls back to a manual checkbox instead. See
[Members](#/members).
</details>

<details class="help-faq-item">
<summary>What's the difference between Check-in and Kids Check-in?</summary>

They look almost identical, but **Kids Check-in** only ever allows checking in minors and
prints a matching guardian tag, while plain **Check-in** allows any active member and is
meant for services/events open to everyone. Use Kids Check-in specifically for
minor-restricted ministries (like a children's ministry during a service). See
[Attendance & Check-in](#/attendance).
</details>

<details class="help-faq-item">
<summary>How do I schedule volunteers for a Sunday service or event?</summary>

Set up your **Service Roles** once (Sound, Greeter, etc.), then create a **Rota** (Role
Requirement) tied to the event or ministry activity saying how many people that role needs —
you can do this directly from an event's panel on the [Calendar](#/calendar). Then assign
volunteers to fill it. See [Rotas (Service Scheduling)](#/rotas).
</details>

<details class="help-faq-item">
<summary>Why does an event show a different time than I expected?</summary>

Every schedule is tied to the timezone of its **location**, not to whatever timezone you
happen to be viewing the calendar in. If your viewing timezone is different, the event
details show both times so nothing is ambiguous. Check that the event's Location has the
correct timezone set — see [Calendar](#/calendar) and
[Church Settings & Locations](#/church-settings).
</details>

<details class="help-faq-item">
<summary>Can I personalize a bulk email with each recipient's name?</summary>

Yes — click into a text field in the composer, then click a variable like **First name**
from the toolbar to insert `{{first_name}}`. It's replaced with each recipient's actual value
when the email sends. See [Bulk Email & Templates](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>Is there a limit on how many people I can email at once?</summary>

Yes, 500 recipients per send, and the same limit applies to a single Data Import file. If you
need to reach more people, split the audience or file into batches.
</details>

<details class="help-faq-item">
<summary>How do I remove the "Sent with HolyCRM" line from my emails?</summary>

You can't — it's a small, fixed part of every email sent through the platform. It's kept
deliberately understated and never appears anywhere else in the app.
</details>

<details class="help-faq-item">
<summary>My church collects offerings in more than one currency. How does that work?</summary>

Set a **default currency** in [Church Settings](#/church-settings), optionally overridden per
[Location](#/church-settings). Any transaction entered in a different currency needs an
**exchange rate** (entered by hand, as of that date) so totals in
[Giving & Finance](#/finance) can combine correctly. There's no automatic exchange-rate
lookup.
</details>

<details class="help-faq-item">
<summary>How do I add a church logo, and where does it show up?</summary>

Upload it in [Church Settings](#/church-settings). It becomes available as a one-click
"Insert church logo" button in the [Bulk Email](#/bulk-email) composer.
</details>

<details class="help-faq-item">
<summary>I forgot my password. What do I do?</summary>

On the login screen, use **Forgot your password?** and enter your email. You'll always get
the same neutral confirmation message, and a reset link if an account exists for that
address — this is intentional, so the login screen can't be used to check whether an email
is registered.
</details>

<details class="help-faq-item">
<summary>Can Members log into HolyCRM themselves?</summary>

Only if they've been given a login as a Member-role **User** — most members are records in
your directory only, with no login at all. A Member-role login is read-only and mainly sees
their own [Profile](#/profile). To give someone a login, see
[Users, Roles & Permissions](#/users-roles).
</details>

<details class="help-faq-item">
<summary>Can guests sign up for an event themselves online?</summary>

Not yet — [Event Registrations](#/events) is currently staff-entered only (a staff member
searches for and adds a member who's already in your directory). Public self-serve signup is
a planned future feature.
</details>

<details class="help-faq-item">
<summary>Something looks broken or I'm stuck on something not covered here. What now?</summary>

Reach out to whoever manages your HolyCRM account/support contact at your church or with
HolyCRM directly. This Help Center covers how each module is meant to work today; if
something behaves differently from what's described here, that's worth reporting.
</details>
