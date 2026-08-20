# Foundation Framework

### The architecture we're establishing

The important thing is that Lovable will now create this foundation:

**Global shell**

> `AdminLayout → AdminSidebar + AdminHeader + MainContent`

**Sidebar**

> `AdminNavigation → 15 primary modules`

**Module → Detail flow**

> `Organizations → Organization Details`  

> `Providers → Provider Details`  

> `Pet Parents → Pet Parent Details`  

> `Bookings → Booking Details`  

> `Verification → Verification Details`  

> `Complaints → Complaint Details`

**Finance is the only large sidebar item with its own internal navigation:**

> Finance → Overview / Transactions / Payments / Refunds / Invoices / Subscriptions / Provider Payouts / Organization Earnings / Commissions / Reports

And importantly, **Users stays removed from the sidebar**.

This is the right stage to establish the architecture. Once Lovable produces this, we can go **module by module** and replace the basic pages with the detailed finalized Doofy Admin functionality without rebuilding the entire shell.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f332b5de-22d9-4b64-ad46-f47d2883cfbc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
