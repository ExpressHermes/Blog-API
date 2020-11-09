from django.shortcuts import get_object_or_404
from .models import Post


class MultipleFieldLookupMixin:
    """
    Mixin to filter comments based on slug and id
    """

    def get_object(self):
        queryset = self.get_queryset()  # Get the base queryset
        queryset = self.filter_queryset(queryset)  # Apply any filter backends
        filter = {}
        # for field in self.lookup_fields:
        #     if self.kwargs[field]: # Ignore empty fields.
        #         filter[field] = self.kwargs[field]
        parent_id = Post.objects.get(slug=self.kwargs["slug"]).id
        filter["parent"] = parent_id
        filter["id"] = self.kwargs["id"]
        obj = get_object_or_404(queryset, **filter)  # Lookup the object
        self.check_object_permissions(self.request, obj)
        return obj