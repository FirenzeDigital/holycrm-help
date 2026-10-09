# Users, Roles & Permissions

There's an important difference between a **Member** (a person in your congregation) and a
**User** (someone with a login to this app). Most members never log in; a user is a member
of your staff/volunteer team who needs access to HolyCRM itself.

## Inviting someone

**Settings → Users → Invite user**. Search for and pick an existing Member first (if
they're already in your directory) — this links their login to their existing record instead
of creating a duplicate person. If they're not a member yet, you can invite them with just a
name and email instead.

Linking matters most for the **Member** role: it's what lets someone see their own contact
info and giving history (see [My Profile](#/profile) and [My Giving](#/my-giving)) — a
Member invited without a linked record just sees an empty Profile page.

Pick their **role**:

| Role | What they can do (by default) |
|---|---|
| **Administrator** | Everything, including users, custom permissions, Data & Privacy and billing. |
| **Coordinator** | Day-to-day ministry and administration: people, small groups, ministries and rotas, events, attendance, finance, email and church settings. Can't change permissions, Data & Privacy or billing, and can't promote anyone to Coordinator/Administrator. |
| **Volunteer** | Hands-on serving at the door and in services: welcome visitors, take attendance and run check-in, finding people by name only. No access to the member directory, finance, prayer requests, small groups, ministries, rota planning, email or reports. |
| **Member** | Self-service only: their own profile, their rotas, availability and giving history. No access to anyone else's data. |

These limits are enforced by HolyCRM's server, not only hidden from the menu, so someone
can't reach data their role doesn't allow by any other route. A **suspended** user loses all
access to the church immediately.

Most people who serve on rotas only need the **Member** role: being on a rota depends on **Serves on rotas** in their member record, not on their login, and Members already see their own rotas and availability.

Leading a small group or ministry adds access to **that team** — see [My Teams](#/my-teams).

An invited person receives an email with a link to set their password. Until they do, their
status shows as **Invited**; once they set a password — or sign in with **Continue with
Google** using that same email — they become **Active** automatically.

## Managing existing users

From the Users list you can **change someone's role**, **suspend** them (they lose access
without deleting their account or history), **reactivate** them, **remove them from the
church** entirely, **resend an invite** that hasn't been accepted yet, or **edit their login
email**.

A few built-in safety rules: you can only assign or manage roles *below* your own (a
Coordinator can't touch an Administrator or another Coordinator's access), you can't edit your own row from
this screen, and a church always keeps at least one Administrator — the last one can't be removed or
demoted.

## Linking a login to a member

A login works best when it's linked to the person's **member** record: their name, My serving,
My giving and My availability all come from it. In the Users list, people without a link show
*Not linked to a member*.

- Click **Link member** (or **Change member**) on their row, search the member and **Save**.
  **Unlink** removes the link without deleting anything.
- You can link your **own** login too, from your row.
- Each member can be linked to only one login. Members that already have one show *already has
  a user* in the search.

## Custom permissions

Each role comes with HolyCRM's recommended access. An Administrator can change it for your
church under **Settings → Custom User Access**:

1. Pick the role at the top (Coordinator, Volunteer or Member). A number next to a role shows
   how many screens you've customized for it.
2. Each screen has up to four boxes: **View**, **Add**, **Edit** and **Delete**. A dash means
   that action doesn't exist for that screen. Ticking Add, Edit or Delete also ticks View;
   unticking View clears the rest.
3. Changed rows are marked; nothing applies until you press **Save changes**. Changes apply to
   everyone with that role, and HolyCRM enforces them everywhere, not just in the menu.

Some screens share one setting — for example, Check-in and Kids Check-in follow
**Attendance** — and are listed as "Also applies to" under it. **Restore default** undoes one
screen; **Restore all defaults** undoes everything for that role.

Two things can't be changed here: the **Administrator** role always has full access (so nobody
locks the church out of this screen), and Billing, Data & Privacy and Custom User Access stay
with Administrators (Users with Administrators and Coordinators).

## My Profile vs. Users

**My Profile** (under Account) is where anyone manages their *own* login — name, avatar,
password, and email. The Users screen is where an Administrator/Coordinator manages *everyone else's*
access. See [My Profile](#/profile).
