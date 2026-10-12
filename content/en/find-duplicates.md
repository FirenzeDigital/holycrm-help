# Find Duplicates

Sometimes the same person ends up in your directory twice: they were imported from two
lists, entered once as "Pepe" and once as "José", or added at the door and again at the
office. **Find Duplicates** (in **Settings**) shows those people side by side so you can
merge them into one record.

Administrators and Coordinators can use it — anyone who can edit and delete members.

## What it finds

- **Same email**, **same phone** (even written differently) or **same name** — almost
  certainly the same person.
- **Similar name** — a typo ("Jonatan" / "Jonathan"), a nickname ("Pepe" / "José",
  "Bill" / "William"), a short name ("Ale" / "Alejandra", "Juanito" / "Juan"), or one surname
  of two ("María López" / "María López García"). These are marked **Check before merging**:
  two brothers or a mother and daughter can have very similar names.

## Merging two records

1. Compare the two cards: name, email, phone, birth date, status, when each was added and
   whether either has a HolyCRM login.
2. Choose **Keep this one** on the record to keep. HolyCRM picks the one with a login, or
   else the older one, but you can change it.
3. Click **Merge** and confirm.

When you merge:

- **Everything linked to the other record moves to the one you keep:** attendance and
  check-ins, small groups and ministries, serving dates and confirmations, giving, event
  registrations, guardians and children, visitor and prayer assignments, and their login.
- **Blank fields are filled in** from the other record (an email, a phone, a birth date…).
  Tags and guardians are combined, notes are joined, and custom fields are merged. Where
  both records have a value, the one you keep wins.
- If both people were in the same group, event or service, they end up there **once**.
- The other record is deleted. **This can't be undone**, so check the pair first.

**Both have a login?** Merge isn't possible until one of them is removed. Go to
[Users](#/users-roles), remove the login you don't need, then come back and merge.

## Not the same person

If the pair is two different people, click **Not the same person** and it disappears from
the list. This is remembered on that device and browser only: another administrator, or
you on another computer, may see the pair again.

## Tips

- After an [import](#/data-import), the summary screen has a **Find Duplicates** button.
- The list shows 25 pairs at a time; **Show more** loads the next ones.
- Importing again won't create new duplicates of people who are already there: the import
  preview spots them and lets you skip or update them.
