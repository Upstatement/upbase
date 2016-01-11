<div class="sidebar__header">
  <ul class="sidebar__connect">
    <li class="sidebar__connect-item"><a class="sidebar__connect--link" href="http://upstatement.com">Upstatement</a></li>
    <li class="sidebar__connect-item"><a class="sidebar__connect--link" href="https://github.com/Upstatement/upbase">Github</a></li>
  </ul>
  <div class="sidebar__logo">
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg class="sidebar__branding--svg" viewBox="0 0 230 230" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
      <g transform="translate(36.000000, 15.000000)">
        <rect x="0" y="0" width="158" height="126.315789"></rect>
        <ellipse cx="79" cy="121.052632" rx="79" ry="78.9473684"></ellipse>
      </g>
    </g>
  </svg>
  <h1 class="sidebar__branding--text">Upbase <span>V 1.0</span></h1>
  <p class="sidebar__branding--subtext">An Upstatement Jam</p>
  </div>
</div>

<div class="sidebar__body">
  {# No item documented #}
  {% if data.length == 0 %}
    <p class="sidebar__item  sidebar__item--heading">No documented item.</p>

  {# Some items documented #}
  {% else %}
    <button type="button" class="btn-toggle  js-btn-toggle" data-alt="Open all">Close all</button>

    {# Loop over the groups #}
    {% for group_name, group in data.byGroupAndType %}


      {# Loop over the types #}
      {% for type, items in group %}
        {% if loop.first %}<div>{% endif %}

        {# If items to be displayed in type #}
        {% if items.length > 0 %}
          <p class="sidebar__item  sidebar__item--sub-heading" data-slug="{{ group_name + '-' + type }}"><a href="#{{ group_name }}-{{ type }}">{{ (type + 's') }}</a></p>

          {# Loop over the items #}
          {% for item in items %}
            {% if loop.first %}<ul class="list-unstyled sidebar__items">{% endif %}
            <li class="sidebar__item  sassdoc__item" data-name="{{ item.context.name }}" data-type="{{ item.context.type }}">
              <a href="#{{ item.context.type }}-{{ item.context.name }}">{{ item.context.name }}
              {% if item.access[0] == "private" %}<span class="sidebar__annotation  sidebar__annotation--private">private</span>{% endif %}
              {% if item.alias != false %}<span class="sidebar__annotation  sidebar__annotation--alias">alias</span>{% endif %}
              </a>
            </li>
            {% if loop.last %}</ul>{% endif %}
          {% endfor %}
        {% endif %}
        {% if loop.last %}</div>{% endif %}
      {% endfor %}

    {% endfor %}
  {% endif %}
</div>
