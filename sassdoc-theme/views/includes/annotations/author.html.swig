{% if item.author.length > 0 %}
  <div class="column">
  <h3 class="item__sub-heading">Author{% if item.author.length > 1 %}s{% endif %}</h3>

  <ul class="list-unstyled">
    {% for author in item.author %}
      <li>{{ author|safe }}</li>
    {% endfor %}
  </ul>
</div>
{% endif %}
{% if (item.return.length or item.throw.length or item.require.length or item.usedby.length or item.since.length or item.see.length or item.todo.length or item.link.length) > 0 %}
</div>
{% endif %}
