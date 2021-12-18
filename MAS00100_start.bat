d:
cd User_Application\MAS00100
call venv\Scripts\activate
start "work"
start "backend" python manage.py runserver
rem cd myappsite\frontend
rem start "frontend" npm run serve
rem cd ../..
code .