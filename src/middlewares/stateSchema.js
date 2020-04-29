export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "The Root Schema",
  "description": "The root schema comprises the entire JSON document.",
  "default": {},
  "additionalProperties": true,
  "required": [
    "actions",
    "auth"
  ],
  "properties": {
    "actions": {
      "$id": "#/properties/actions",
      "type": "array",
      "title": "The Actions Schema",
      "description": "An explanation about the purpose of this instance.",
      "default": [],
      "examples": [
        [
          "Comment",
          "Comment2"
        ]
      ],
      "additionalItems": true,
      "items": {
        "$id": "#/properties/actions/items",
        "type": "string",
        "title": "The Items Schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "Comment",
          "Comment2"
        ]
      }
    },
    "auth": {
      "$id": "#/properties/auth",
      "type": "boolean",
      "title": "The Auth Schema",
      "description": "An explanation about the purpose of this instance.",
      "default": false,
      "examples": [
        false
      ]
    }
  }
}