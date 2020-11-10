# Blog API
A REST API for blog built using Django Rest Framework

## Installation

### Requirements
- Python
- Django

    Complete list available in requirements.txt file

### Quickstart
- Clone the repo.  
    ```bash
    git clone https://github.com/ExpressHermes/Blog-API.git
    ```

- Inside the repo folder, make a virtual environment and activate it 
    ```bash
    cd Blog-API
    python -m venv env 
    source env/bin/activate
    ```

- Install requirements from requirements.txt
    ```
    pip install -r requirements.txt
    ```

- Makemigrations and migrate the project
    ```python
    python manage.py makemigrations && python manage.py migrate
    ```

- Create a superuser
    ```python
    python manage.py createsuperuser
    ```

- Runserver
    ```python
    python manage.py runserver
    ```

**Note: After running the server, you can use the api inside browser or you can use Postman to make api calls. Make sure in each api call, you provide username, password or token obtained by creating a user.**

# RESTAPI Docs
I have added `drf-yasg` for API documentation which can be accessed after running the server and going to following links:

Swagger UI docs:    `http://127.0.0.1:8000/swagger/`

Redoc UI docs:  `http://127.0.0.1:8000/redoc/`


## API Endpoints

| Function 	| REQUEST 	| Endpoint 	| Authorization 	| data-object 	|
|-	|-	|-	|-	|-	|
| Create new user 	| POST 	| http://127.0.0.1:8000/user/register/ 	| Not Required 	| username: string,<br>email: email,<br>password: string 	|
| Returns list of all existing users 	| GET 	| http://127.0.0.1:8000/user/ 	| Basic Authorization 	|  	|
|  	|  	|  	|  	|  	|
| Returns a list of all existing posts 	| GET 	| http://127.0.0.1:8000/api/ 	| Not Required 	|  	|
| Creates a new post instance. Returns created post data 	| POST 	| http://127.0.0.1:8000/api/create_post/ 	| Basic Authorization 	| author: integer(user pk),<br>title: string,<br>description: string,<br>body: string, 	|
| Returns the details of a post instance. Searches post using slug field. 	| GET 	| http://127.0.0.1:8000/api/{str:slug}/ 	| Basic Authorization 	| slug: string,<br>author: integer(user pk),<br>title: string,<br>description: string,<br>body: string, 	|
| Updates an existing post. Returns updated post data 	| PUT, PATCH 	| http://127.0.0.1:8000/api/{str:slug}/ 	| Basic Authorization 	| slug: string,<br>author: integer(user pk),<br>title: string,<br>description: string,<br>body: string, 	|
| Deletes the existing post 	| DELETE 	| http://127.0.0.1:8000/api/{str:slug}/ 	| Basic Authorization 	| slug: string 	|
| Returns the list of comments on a particular post 	| GET 	| http://127.0.0.1:8000/api/{str:slug}/comment/ 	| Not Required 	| slug: string 	|
| Create a comment instnace. Returns created comment data 	| POST 	| http://127.0.0.1:8000/api/{str:slug}/comment/create 	| Basic Authorization 	| slug: string,<br>parent: integer(post id),<br>author: integer(user id),<br>body: string 	|
| Returns the details of a comment instance. Searches comment using comment id and post slug in the url. 	| GET 	| http://127.0.0.1:8000/api/{str:slug}/comment/{int:id} 	| Not Required 	| slug: string,<br>id: integer(comment id) 	|
| Updates an existing comment. Returns updated comment data 	| PUT, PATCH 	| http://127.0.0.1:8000/api/{str:slug}/comment/{int:id} 	| Basic Authorization 	| slug: string,<br>id: integer(comment id)<br>parent: integer(post id),<br>author: integer(current user id),<br>body: string, 	|
| Deletes an existing comment 	| DELETE 	| http://127.0.0.1:8000/api/{str:slug}/comment/{int:id} 	| Basic 	| slug: string,<br>id: integer(comment id) 	|
