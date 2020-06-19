const sourcesOfExpenses = [
  {
    value: "Carro",
    backgroundColor: "#b64941",
    icon: "car",
  },
  {
    value: "Casa",
    backgroundColor: "#869887",
    icon: "home",
  },
  {
    value: "Férias",
    backgroundColor: "#45b147",
    icon: "beach",
  },
  {
    value: "Gadgets",
    backgroundColor: "#933623",
    icon: "cellphone-link",
  },
  {
    value: "Hobbie",
    backgroundColor: "#d0141d",
    icon: "brush",
  },
  {
    value: "Impostos",
    backgroundColor: "#b5fec1",
    icon: "currency-eur",
  },
  {
    value: "Lazer",
    backgroundColor: "#e8b4e1",
    icon: "food-fork-drink",
  },
  {
    value: "Mercearias",
    backgroundColor: "#cd4799",
    icon: "baguette",
  },
  {
    value: "Negocio Pessoal",
    backgroundColor: "#511171",
    icon: "office-building",
  },
  {
    value: "Outra",
    backgroundColor: "#c75c84",
    icon: "apps",
  },
  {
    value: "Saúde",
    backgroundColor: "#43546c",
    icon: "hospital-box",
  },
  {
    value: "Telecomunicações",
    backgroundColor: "#d18507",
    icon: "cellphone",
  },
  {
    value: "Transporte",
    backgroundColor: "#44e420",
    icon: "bus",
  },
  {
    value: "Vestuário",
    backgroundColor: "#842abe",
    icon: "shopping",
  },
];

function mappingItemToIcon(item) {
  return sourcesOfExpenses.find(function (source) {
    return source.value === item.source;
  });
}

export default {
  sourcesOfExpenses,
  mappingItemToIcon,
};
