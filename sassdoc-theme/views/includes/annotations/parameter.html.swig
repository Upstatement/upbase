<h3 class="item__sub-heading">Parameters</h3>

{% if item.parameter.length > 0 %}

  <dl class="item__parameters">
  {% for parameter in item.parameter %}
    <dt class="item__parameter-item">
      <code class="item__parameter-name">${{ parameter.name }}</code>
      <ul class="item__parameter-meta">
        <li class="item__parameter-type">
          <code>
            {% if parameter.type == '*' %}
              Any
            {% else %}
              {{ parameter.type | display_as_type }}
            {% endif %}
          </code>
        </li>
        <li class="item__parameter-default">
          <span>Default:</span>
          {% if not parameter.default %}
            &mdash;<span class="visually-hidden"> none</span>
          {% else %}
            {% if (parameter.type|lower).indexOf('color') > -1 and parameter.default|is_color == true %}
              <code class="color-preview--inline" style="background:{{ parameter.default }}; color: {{ parameter.default | yiq }}">{{ parameter.default }}</code>
            {% else %}
              <code>{{ parameter.default }}</code>
            {% endif %}
          {% endif %}
        </li>
      </ul>
    </dt>
    <dd class="item__parameter-definition">
      <p class="item__parameter-description">{{ parameter.description|default('&mdash;<span class="visually-hidden"> none</span>')|safe }}</p>
    </dd>
    {% endfor %}
  </dl>

{% else %}

  <p>None.</p>

{% endif %}
