{% if item.link.length > 0 %}
  <div class="column">
  <h3 class="item__sub-heading">Links</h3>

  <ul class="list-unstyled">
  {% for link in item.link %}
    <li>
      <a href="{{ link.url }}" class="item__link">
        {% if link.caption %}
          {{ link.caption }}
        {% else %}
          {{ link.url }}
        {% endif %}
      </a>
    </li>
  {% endfor %}
  </ul>
</div>
{% endif %}
