import { CreateLinkComponent, FLUID_GO_TO_TAB, Title, TitleLinks, getLabel, triggerCommands } from "./imports";

import { CardCatalogNumberOfPages } from "./components";
import { PAGE_NAME } from "./constants";

export default (page, { activeKey = 1 }, { id }) => {
  switch (page) {
    case "create":
    case "view":
      return [
        {
          isVisible: (props, state) => {
            return state.activeKey && state.activeKey > 1;
          },
          name: "prevTab",
          icon: "backward",
          label: getLabel("LABEL_PREVIOUS_TAB"),
          fluid: {
            name: `${PAGE_NAME}_${FLUID_GO_TO_TAB}`,
            data: {
              eventKey: activeKey - 1
            }
          }
        },
        {
          isVisible: (props, state) => {
            if (props.pageForm && props.pageForm.managed) {
              if (
                props.pageForm &&
                props.pageForm.data &&
                props.pageForm.data[Title.BARCODE] &&
                props.pageForm.data[Title.BARCODE].length > 0
              ) {
                return !state.activeKey || state.activeKey < 8;
              }
              return !state.activeKey || state.activeKey < 7;
            } else {
              return !state.activeKey || state.activeKey < 6;
            }
          },
          name: "nextTab",
          icon: "forward",
          label: getLabel("LABEL_NEXT_TAB"),
          fluid: {
            name: `${PAGE_NAME}_${FLUID_GO_TO_TAB}`,
            data: {
              eventKey: activeKey + 1
            }
          }
        },
        {
          isVisible: props => props.pageForm && props.pageForm.managed,
          name: "preview",
          icon: "search",
          label: getLabel("LABEL_PREVIEW"),
          url: "/title/preview/" + id
        }
      ];
    case "preview":
      return [{
        name: "numberOfPages",
        component: CardCatalogNumberOfPages
      }];
    default: {
      const links = new TitleLinks("title").getLinks();
      links.unshift({
        name: "searchTitle",
        component: CreateLinkComponent("LinkSearch",
          {
            label: getLabel("LABEL_SEARCH_RECORDS"),
            name: "searchTitle",
            pageName: PAGE_NAME,
            fluidLink: triggerCommands(PAGE_NAME)
          })
      });
      return links;
    }
  }
};
