from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsOwnerOrReadOnly(BasePermission):
    """
    Object-level permission: only owners can modify.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return obj.user == request.user
        return obj.user == request.user
