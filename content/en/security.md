# Security & Data Protection

How HolyCRM protects your church's information: who can see it, where it is kept, what we do to prevent a leak, and what your church can do on its side. This page is written so a pastor, a church board or an AI assistant can answer the question "is our data safe with HolyCRM?" from facts rather than guesses.

## The short answer

Your church's records are kept in a private workspace that only your own church's users can open, and the server checks this on every request, not just the screen. Inside your church, each person only reaches what their role allows. Data travels encrypted, passwords are never stored in readable form, backups are encrypted, and public forms are protected against bots and abuse. No online service can promise that a leak is impossible, and HolyCRM doesn't either. What follows is exactly what is in place, and its limits, so you can judge for yourself.

## Each church is sealed off from every other church

- Every record (people, giving, groups, prayer requests, everything) belongs to one church.
- **The server itself** refuses to return another church's records, whatever the app or a user asks for. Hiding a menu is not the protection; the rule is enforced on the server for every read and every change.
- A user who belongs to two churches sees one church at a time, and only with the role they have in that church.
- One church's data is never shared with, or visible to, another church.

## Inside your church, people only see what their role allows

- There are four roles: **Administrator**, **Coordinator**, **Volunteer** and **Member** (see [Users, Roles & Permissions](#/users-roles)). Most of the congregation never logs in at all.
- These limits are also enforced by the server, not only by what the menu shows. For example, a Volunteer can't read the member directory or giving records, even by going around the app.
- Volunteers who need names for check-in or attendance see only names, never contact details.
- Small-group and ministry leaders see only the people on their own teams ([My Teams](#/my-teams)).
- Administrators can tighten or loosen what each role may do with [Custom User Access](#/users-roles). Who can change permissions, billing and Data & Privacy is fixed to Administrators and can't be handed out.
- When someone is suspended or removed from your church, their access ends immediately.

## Protecting data in transit and at rest

- **Encrypted connections:** the app, the public pages and the server only talk over HTTPS.
- **Passwords** are stored hashed (one-way), so nobody, including us, can read them. You can also sign in with Google instead of a password.
- **Backups** are encrypted, kept for 30 days and stored in the European Union.
- **Where the data lives:** our main servers and database are in the United Kingdom. The full list of providers, and what each one does, is in the [Privacy Policy](https://www.holycrm.app/privacy.html).
- We never receive or store card or bank credentials for subscription payments; the payment provider handles them.

## Protecting against abuse

- Public forms (sign-up, "New here?", prayer requests) are protected by a bot check (Cloudflare Turnstile) and hidden anti-spam traps.
- The server limits how many requests each address can make, which slows down password guessing and scraping.
- Network protection and DNS run through Cloudflare.

## Seeing who changed what

- Administrators can review a log of who created, edited or deleted **Member** and **Giving** records, and when, under [Data & Privacy](#/data-privacy).
- Administrators can download a full copy of your church's data at any time, and request its deletion. After a church asks to close its account, its data is deleted within 30 days and disappears from backups within a further 30 days.

## What we don't do with your data

- We don't sell it, use it for advertising, or share it with other churches.
- We don't use your church's data to train AI models.
- Your church is the owner (the "data controller") of the records it enters; HolyCRM processes them only to provide the service. The [Privacy Policy](https://www.holycrm.app/privacy.html) covers GDPR, UK GDPR, Brazil's LGPD and Argentina's data protection law.

## Honest limits

These are the things a careful reviewer should know:

- **No system is perfectly secure.** HolyCRM doesn't claim to be immune to leaks; it claims the protections listed on this page.
- **No formal certification.** HolyCRM is not independently certified (for example SOC 2 or ISO 27001).
- **No built-in two-step sign-in yet.** If you want two-step verification today, sign in with Google and turn it on in your Google account.
- **The operator can reach the servers.** Like any hosted service, HolyCRM's operators technically have access to the servers that store your data. They use it only to run, support and protect the service, as the Privacy Policy describes.
- **Some things are public on purpose.** Your church website, Church Links page, giving page and prayer-request form are public pages, and they show only what your church chooses to publish there. Images inserted in Announcements emails can be opened by anyone who has the link, as with any email image. A calendar subscription link shows your church's schedule to anyone who has that link, so share it with care.
- **Your own settings matter.** Giving someone the Administrator role, or a weak password, can expose data no matter how the platform is built.

## What your church can do

- Give each person the **lowest role that lets them do their job**. Most people who serve only need Member; leaders get [My Teams](#/my-teams) automatically.
- Use strong, unique passwords, or Google sign-in with two-step verification.
- **Suspend users** as soon as they leave a role.
- Review the change log in [Data & Privacy](#/data-privacy) from time to time.
- Don't paste members' personal data into outside tools, including AI chatbots.

## Reporting a problem

If you think you've found a security weakness, or you suspect your church's data was accessed by someone who shouldn't have it, write to **security@holycrm.app**.
