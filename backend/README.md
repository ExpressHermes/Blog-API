# Blog API Backend

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

- Inside the backend folder, make a virtual environment and activate it 
    ```bash
    cd Blog-API/backend
    python -m venv env 
    source env/bin/activate
    ```

- Install requirements from requirements.txt
    ```
    pip install -r requirements.txt
    ```

- Makemigrations and migrate the project
    ```
    python manage.py makemigrations && python manage.py migrate
    ```

- Create a superuser
    ```
    python manage.py createsuperuser
    ```

- Runserver
    ```
    python manage.py runserver
    ```

**Note: After running the server, you can use the api inside browser or you can use Postman to make api calls. Make sure in each api call, you provide username, password by creating a user.**

# RESTAPI Docs
I have added `drf-yasg` for API documentation which can be accessed after running the backend server and going to following links:

Swagger UI docs:    http://127.0.0.1:8000/swagger/

Redoc UI docs:  http://127.0.0.1:8000/redoc/

While working with api in browser, you can login using `http://127.0.0.1:8000/api-auth/` link.


## API
<details>
<summary> User model </summary> 

- User:
    - username: string(unique),
    - email: email,
    - password: string(min 8 chars)

</details>

<details>
<summary> Post Model </summary>

- Post:
    - id: Post id(read only),
    - slug: string,
    - title: string,
    - author: user-id(read only),
    - body: string,
    - description: string,
    - image: image(optional)
    - created_at: datetime(read only)
    - updated_at: datetime(read only)
</details>

<details>
<summary>Comment Model </summary>

- Comment:
    - parent: post id(read only),
    - author: user id(ready only),
    - body: string,
    - created_at: datetime(read only)
    - updated_at: datetime(read only)
</details>



### Endpoints

Brief explanation of endpoints:

| Function                                                                                               | REQUEST    | Endpoint                                                | Authorization | form-data                                 |
|--------------------------------------------------------------------------------------------------------|------------|---------------------------------------------------------|---------------|-------------------------------------------|
| Create new user                                                                                        | POST       | http://127.0.0.1:8000/user/register/                    | Not Required  | username, email, password                 |
| Returns list of all existing users                                                                     | GET        | http://127.0.0.1:8000/user/                             | Basic Auth    |                                           |
| Returns the detail of an user instance                                                                 | GET        | http://127.0.0.1:8000/user/{int:id}/                    | Basic Auth    |                                           |
| Update the detail of an user instance                                                                  | PUT, PATCH | http://127.0.0.1:8000/user/{int:id}/                    | Basic Auth    |                                           |
| Delete an user instance                                                                                | DELETE     | http://127.0.0.1:8000/user/{int:id}/                    | Basic Auth    |                                           |
|                                                                                                        |            |                                                         |               |                                           |
| Returns a list of all existing posts                                                                   | GET        | http://127.0.0.1:8000/posts/                            | Not Required  |                                           |
| Creates a new post instance. Returns created post data                                                 | POST       | http://127.0.0.1:8000/posts/create/                | Basic Auth    | title, body, description, image: optional |
| Returns the details of a post instance. Searches post using slug field.                                | GET        | http://127.0.0.1:8000/posts/{str:slug}/                 | Basic Auth    |                                           |
| Updates an existing post. Returns updated post data                                                    | PUT, PATCH | http://127.0.0.1:8000/posts/{str:slug}/                 | Basic Auth    | title, body, description, image: optional |
| Deletes the existing post                                                                              | DELETE     | http://127.0.0.1:8000/posts/{str:slug}/                 | Basic Auth    |                                           |
| Returns the list of comments on a particular post                                                      | GET        | http://127.0.0.1:8000/posts/{str:slug}/comment/         | Not Required  |                                           |
| Create a comment instnace. Returns created comment data                                                | POST       | http://127.0.0.1:8000/posts/{str:slug}/comment/create/   | Basic Auth    | body: comment body                        |
| Returns the details of a comment instance. Searches comment using comment id and post slug in the url. | GET        | http://127.0.0.1:8000/posts/{str:slug}/comment/{int:id}/ | Not Required  |                                           |
| Updates an existing comment. Returns updated comment data                                              | PUT, PATCH | http://127.0.0.1:8000/posts/{str:slug}/comment/{int:id}/ | Basic Auth    | body: comment body                        |
| Deletes an existing comment                                                                            | DELETE     | http://127.0.0.1:8000/posts/{str:slug}/comment/{int:id}/ | Basic Auth    | body: comment body                        |


