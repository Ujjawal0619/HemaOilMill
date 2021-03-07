1. command: pip install pipenv

creating an environment using 'pipenv'.
command: pipenv shell // creating a file similar as package.json

2.  installing packages:
    command: pipenv install django djangorestframework django-rest-knox

            django: framework
            djangorestframework: RESTapi backend creation. create lock file for dependencies and their versons.
            django-rest-knox: for auth

3.  CREATING PROJECT: (startproject)
    command: django-admin startproject heamamill

NOTE: above command creates a directory 'heamamill' inside it a file called manage.py is basically like a CLI for django, it runs server, creates migrations(form quries for db) all that stuffs.
if you are using vs code make sure to select interpreter which has project name. -> ctrl + shift + p -> python: select interpreter-> choose

4. CREATING APP: (startapp) inside 'hemamill' which is our project.
   command: cd hemamill
   command: python manage.py startapp millapi
   it will create a folder inside 'hemamill' (inside project directory)

5. NOW: open settings file (inside 'hemamill/hemamill') and add under INSTALLED_APP.
   'millapi', // app name
   'rest_framework' // django restapi frmamework

6. DATABASE: go inside app folder i.e inside 'millapi' & inside models.py create modles for tables.
   and don't forget to register created modals in admin.py file.
   command: python manage.py makemigrations millapi
   this will create query for modals.
   command: python manage.py migrate
   this will run the query and make table in db.

   make super user to see database:
   command: python manage.py createsuperuser

   serializer:
   view:
   routers:

// AUTH:
in views add following to each ViewSet classes or define it globally.
authentication_classes = [JWTAuthentication] -> auth type used
permission_classes = [IsAuthenticated] -> grant/revoke permission to access admin dashboard & DRF api dashboard.
for global:
goto settings.py -> add:
REST_FRAMEWORK = {
'DEFAULT_AUTHENTICATION_CLASSES':['rest_framework.authentication.JWTAuthentication']
'DEFAULT_PERMISSION_CLASSES':['rest_framework.permissions.IsAuthenticated']
}

add: path('auth/', include('rest_framework.urls', namespace='rest_framework')) to urls.py to activate login option in DRF dashboard.

// required state //

Mustard: (type: mustard)
date, name, mobile, quantity, rate, transport, address, desc,

Container: (type:containers)
date, name, mobile, rate, transport, quantity, containerType, address, desc,

Employee: (type:employees)
joining, name, mobile, photo, identity, address

EmpPayment: (type:payments)
employee, date, amount

OtherExpense: (type:other)
date, amount, expenseType

Oil: (type: oil)
name, date, mobile, containerType, quantity, rate, transport, address, desc

MustardCake: (type:cake)
date, name, mobile, quantity, rate, transport, address, desc

Dues: (type:dues)
{
"duesType": "",
"duesFor": "",
"name": "",
"mobile": "",
"total": null,
"paid": null,
"due": null,
"isClear": false,
"desc": ""
}
