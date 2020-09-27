import React from "react"
import "./LeftPanel.css"

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

class LeftPanel extends React.Component {
    render() {
        return (
            <div class="left-panel__wrapper">
                <div class="left-panel-elements__wrapper">
                    <div class="left-panel-element">
                        <span>
                            <QueryBuilderIcon />
                            <p>COVID 19 - centrum informacji</p>
                        </span>
                    </div>
                    <div class="left-panel-element">
                        <span>
                            <QueryBuilderIcon />
                            <p>Szukaj znajomych</p>
                        </span>
                    </div>
                    <div class="left-panel-element">
                        <span>
                            <QueryBuilderIcon />
                            <p>Grupy</p>
                        </span>
                    </div>
                    <div class="left-panel-element">
                        <span>
                            <QueryBuilderIcon />
                            <p>Marketplace</p>
                        </span>
                    </div>
                    <div class="left-panel-element">
                        <span>
                            <QueryBuilderIcon />
                            <p>Filmy</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftPanel;