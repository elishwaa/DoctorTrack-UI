Doctor Track - License Management System
A robust Doctor License Management module built for a Medical SaaS platform. This application monitors medical staff compliance by tracking license validity, preventing duplicates, and providing real-time status updates using a high-performance .NET and Next.js stack.

🚀 Tech Stack
Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS.  
Backend: .NET 8 Web API following Clean Architecture principles.  
Database: SQL Server.  
Communication: RESTful API with async/await patterns.

✨ Key Features
Consolidated Management: A unified dashboard to Create, Read, Update, and Delete doctor records.  
Advanced Search & Filter: Real-time search by doctor name or license number and filtering by status (Active, Suspended, Expired).  
Smart Status Logic: Automatically identifies expired licenses if the expiry date is earlier than today.  
Optimized Performance: Uses SQL Stored Procedures for doctor listing to ensure high performance and data integrity.  
Responsive UI: A mobile-friendly, scrollable interface with sticky headers and visual highlights for expired records.  

🛠️ Installation & Setup
Prerequisites
.NET 8 SDK
Node.js 18+
SQL Server

1. Database Setup
Run the provided SQL scripts to create the Doctors table.  
Execute the stored procedure script GetDoctorsList which handles the search, filter, and expiry logic.

2. Backend Setup
# Update ConnectionString in appsettings.json
dotnet restore
dotnet run

3. Frontend Setup
Bash
cd doctor-track
npm install
npm run dev

The app will be available at http://localhost:3000.

