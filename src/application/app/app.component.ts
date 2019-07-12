import Vue from 'vue';
import Component from 'vue-class-component';
import ApplicationNavigationComponent from "../components/application-navigation/application-navigation.component";
import BugReportToolComponent from "../components/bug-report-tool/bug-report-tool.component";


@Component({
    components: {
        'application-navigation': ApplicationNavigationComponent,
        'bug-report-tool': BugReportToolComponent
    }
})
export default class AppComponent extends Vue {

    public showModal() {
        this.$modal.show('bug-report-tool')
    }

    beforeMount() {
        let codes = [
            "Q".charCodeAt(0),
            "W".charCodeAt(0),
            "E".charCodeAt(0)
        ];
        let pressed = {};

        document.onkeydown = (e) => {
            e = e || window.event;

            Object.assign(pressed, {[e.keyCode]: true});

            for (var i = 0; i < codes.length; i++) {
                // @ts-ignore
                if (!pressed[codes[i]]) {
                    return;
                }
            }

            pressed = {};

            this.showModal()
        };

        document.onkeyup = function (e) {
            e = e || window.event;

            // @ts-ignore
            delete pressed[e.keyCode];
        };
    }
}

