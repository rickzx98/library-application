import { ACTION_SEARCH } from "./constants";
import { FluidFunc } from "./imports";

FluidFunc.create("cataloging")
    .onStart(FuncAction);


function FuncAction({ action }) {
    switch (action()) {
        case ACTION_SEARCH:
    }
} 