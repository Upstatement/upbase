{% if item.todo.length > 0 %}
  <div class="column">
  <h3 class="item__sub-heading">TODO's</h3>

  <ul class="list-unstyled">
    {% for todo in item.todo %}
      <li>{{ todo|safe }}</li>
    {% endfor %}
  </ul>
</div>
{% endif %}
