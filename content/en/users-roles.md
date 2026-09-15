# Users, Roles & Permissions

There's an important difference between a **Member** (a person in your congregation) and a
**User** (someone with a login to this app). Most members never log in; a user is a member
of your staff/volunteer team who needs access to HolyCRM itself.

## Inviting someone

**Admin Settings → Users → Invite user**. Search for and pick an existing Member first (if
they're already in your directory) — this links their login to their existing record instead
of creating a duplicate person. If they're not a member yet, you can invite them with just a
name and email instead.

Pick their **role**:

| Role | Can typically do |
|---|---|
| **Admin** | Everything, including Church Settings and inviting/managing other users. |
| **Manager** | Day-to-day operations across most modules, but not Church Settings or promoting anyone to Manager/Admin. |
| **Volunteer** | Narrow, task-focused access — commonly attendance/check-in duties — as your church configures it. |
| **Member** | Read-only self-service, mainly their own Profile. |

An invited person receives an email with a link to set their password. Until they do, their
status shows as **Invited**; once they set a password, they become **Active** automatically.

## Managing existing users

From the Users list you can **change someone's role**, **suspend** them (they lose access
without deleting their account or history), **reactivate** them, **remove them from the
church** entirely, **resend an invite** that hasn't been accepted yet, or **edit their login
email**.

A few built-in safety rules: you can only assign or manage roles *below* your own (a
Manager can't touch an Admin or another Manager's access), you can't edit your own row from
this screen, and a church always keeps at least one Admin — the last one can't be removed or
demoted.

## Custom permissions

Beyond the four standard roles, an Admin can fine-tune access per module under
**Admin Settings → Custom User Access** — for example, letting Volunteers create Events
even though that's not part of the default Volunteer role. These overrides apply on top of
the standard role defaults, specifically for your church.

## My Profile vs. Users

**My Profile** (under Account) is where anyone manages their *own* login — name, avatar,
password, and email. The Users screen is where an Admin/Manager manages *everyone else's*
access. See [My Profile](#/profile).
