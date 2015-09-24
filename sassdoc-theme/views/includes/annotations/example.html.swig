{% if item.example.length > 0 %}
  <h3 class="item__sub-heading">Example</h3>

  {% for example in item.example %}
  <div class="item__example  example">
    {% if example.description %}
    <div class="example__description">{{ example.description|safe }}</div>
    {% endif %}
    <pre class="example__code  language-{{ example.type }}"><code>{{ example.code|escape|safe }}</code></pre>
  </div>
  {% endfor %}
{% endif %}
{% if (item.return) or (item.throw.length or item.require.length or item.usedby.length or item.since.length or item.see.length or item.todo.length or item.link.length > 0) %}
<div class="columns">
{% endif %}
