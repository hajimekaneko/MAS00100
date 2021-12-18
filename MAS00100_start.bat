d:
cd User_Application\MAS00100
call venv\Scripts\activate
start "work"
start "backend" python manage.py runserver
cd myappsite\frontend
start "frontend" npm run serve
cd ../..
code .