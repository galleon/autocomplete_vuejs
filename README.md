# autocomplete_vuejs

## How to edit the default proxy ?
Go to `src/views/Article.vue` and edit the default metadata for the article or open the app, open the settings popup and edit the values.

Default article
```json
{
  title: "",
  subjects: [],
  _summary: "",
  lastTitleUpdate: Date.now(),
  lastSummaryUpdate: Date.now(),
  _metadata: {
    api_proxy: "https://aqsone-reverse-proxy.herokuapp.com/",
    api_url: "https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",
    api_settings: [
      { type: "number", key: "max_length", value: 100 },
      { type: "text", key: "end_sequence", value: "." },
      { type: "checkbox", key: "remove_input", value: true },
      { type: "number", key: "top_k", value: 40 },
      { type: "number", key: "top_p", value: 0.9 },
      { type: "number", key: "temperature", value: 0.5 },
    ],
  },
  isLoading: false,
}
```
