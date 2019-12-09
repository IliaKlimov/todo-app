from django.shortcuts import render
from django.http import HttpResponse
from .models import Todo, Project
from .forms import TodoForm
from django.core import serializers


# Create your views here.
def index(request):
    if request.method == 'GET':
        todos = Todo.objects.all()
        projects = Project.objects.all()
        # return HttpResponse("Hey there")
        form = TodoForm
        return render(request, "index.html", {"projects": projects, 'form': form})

    elif request.method == 'POST':
        if request.is_ajax():
            form = TodoForm(request.POST)
            if form.is_valid():
                todo = form.save()
            # task = request.POST['task']
            # project = request.POST['project']
            # return HttpResponse(str(todo.task)+str(todo.project)+str(todo.id))
            # todo_list = serializers.serialize('json', todo.objects.all())
            # return HttpResponse(todo_list)
        return HttpResponse("Not ajax")


def modify_todo(request, todo_id):
    print(todo_id, request.method)
    if request.method == 'POST':
        # form = TodoForm(request.POST)
        id_ = request.POST.get('id')
        action = request.POST.get('action')
        print(todo_id, request.method, action)
        item = Todo.objects.get(id=todo_id)
        task = request.POST.get('task')
        is_done = request.POST.get("is_done")
        print("Post items: ", list(request.POST.items()))
        # is_done = True if is_done=="on" else False  if is_done==
        print(todo_id, request.method, action, task, is_done)
        if action == "delete":
            item.delete()
        elif action == "modify":
            if task is not None:
                item.task = task
            item.is_done = True if is_done == "on" else False
            item.save()
        return HttpResponse("ok")
