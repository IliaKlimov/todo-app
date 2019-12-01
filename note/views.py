from django.shortcuts import render
from django.http import HttpResponse
from .models import Todo, Project
from .forms import TodoForm


# Create your views here.
def index(request):
    if request.method == 'GET':
        todos = Todo.objects.all()
        projects = Project.objects.all()
        # return HttpResponse("Hey there")
        form = TodoForm
        return render(request, "index.html", {"todos": todos, "projects": projects, 'form': form})
    # elif request.method == 'POST':
        # if
