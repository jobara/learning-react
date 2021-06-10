import React from 'react';
import fluid from './fluid.js';

var uio = fluid.registerNamespace("uio");
fluid.defaults("uio.react", {
    gradeNames: ["fluid.uiOptions"],
    auxiliarySchema: {
        terms: {
            "templatePrefix": "dist/infusion/src/framework/preferences/html",
            "messagePrefix": "dist/infusion/src/framework/preferences/messages"
        },
        "fluid.prefs.tableOfContents": {
            enactor: {
                "tocTemplate": "dist/infusion/src/components/tableOfContents/html/TableOfContents.html",
                "tocMessage": "dist/infusion/src/framework/preferences/messages/tableOfContents-enactor.json",
                ignoreForToC: {
                    "overviewPanel": ".flc-overviewPanel"
                }
            }
        }
    }
});

export default class UIO extends React.Component {
    componentDidMount() {
        this.component = uio.react(this.el, this.props.options);
    }

    componentWillUnmount() {
        this.component.destroy();
    }

    render() {
        return (
            <div>
                <section className="flc-prefsEditor-separatedPanel fl-prefsEditor-separatedPanel" ref={el => this.el = el}>
                    <div className="fl-panelBar fl-panelBar-smallScreen">
                        <span className="fl-prefsEditor-buttons">
                            <button className="flc-slidingPanel-toggleButton fl-prefsEditor-showHide"> Show/Hide</button>
                            <button className="flc-prefsEditor-reset fl-prefsEditor-reset"><span className="fl-icon-undo"></span> Reset</button>
                        </span>
                    </div>
                    <div className="flc-slidingPanel-panel flc-prefsEditor-iframe"></div>
                    <div className="fl-panelBar fl-panelBar-wideScreen">
                        <span className="fl-prefsEditor-buttons">
                            <button className="flc-slidingPanel-toggleButton fl-prefsEditor-showHide"> Show/Hide</button>
                            <button className="flc-prefsEditor-reset fl-prefsEditor-reset"><span className="fl-icon-undo"></span> Reset</button>
                        </span>
                    </div>
                </section>
            </div>
        );
    }
}
