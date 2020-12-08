from rest_framework.pagination import (
    LimitOffsetPagination,
)

class PostLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 10