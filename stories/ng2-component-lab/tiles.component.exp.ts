import { experimentOn } from '@islavi/ng2-component-lab';

const alert1  = window.alert;
const console1  = console.log;

export default experimentOn('Tiles')
    .group("Tiles",[
      {
        id: 'tileSampleBlue',
        showSource: true,
        context: {
            alert: alert1,
            console: console1
        },
        title: 'Tile sample blue',
        description: 'Tile sample blue',
        template: `
            <sdc-tile>
                <sdc-tile-header>
                    <div class="blue">P</div>
                </sdc-tile-header>
                <sdc-tile-content>
                    <div class="sdc-tile-content-icon blue">
                        <div class="svg-icon-wrapper"  >
                            <svg class="svg-icon __vsp" viewBox="0 0 59.5 40" id="vsp_icon">
                                <title>
                                    vsp_new_icon
                                </title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="vlm_icon" data-name="vlm icon">
                                        <path d="M58.28,30.74c-1.49-1.82-3-2.7-4.67-2.74a8.5,8.5,0,0,0-16.22-2.44,6.93,6.93,0,0,0-4.06.66A7.23,7.23,0,0,0,36.42,40H53.5a6,6,0,0,0,6-6A5.18,5.18,0,0,0,58.28,30.74ZM53.5,38H36.42a5.25,5.25,0,0,1-5.21-5.91,5.32,5.32,0,0,1,3-4.06,5,5,0,0,1,2.21-.53,5.25,5.25,0,0,1,1.35.18l.92.24L39,27A6.5,6.5,0,0,1,51.67,29v1.3l1.17-.2c1-.17,2.17-.17,3.91,2a3.18,3.18,0,0,1,.76,2A4,4,0,0,1,53.5,38Z">
                                        </path>
                                        <path d="M49,0,4,.17A3.79,3.79,0,0,0,0,3.69V7.94H0v2H0V36.31C0,38.35,2,40,4.25,40l20.84-.08a1,1,0,0,0,0-1.92L4,38.08a1.89,1.89,0,0,1-2-1.76V10H51v7a1,1,0,0,0,2,0V3.53A3.79,3.79,0,0,0,49,0ZM2,8V3.76A1.89,1.89,0,0,1,4,2l45-.16a1.89,1.89,0,0,1,2,1.76V8Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="sdc-tile-content-info">
                        <div class="sdc-tile-info-line title">Router</div>
                        <div class="sdc-tile-info-line subtitle">test</div>
                    </div>
                </sdc-tile-content>
                <sdc-tile-footer>
                    <span class="sdc-tile-footer-cell">Footer</span>
                </sdc-tile-footer>
            </sdc-tile>
            `
    },
    {
        id: 'tileSamplePurple',
        title: 'Tile sample purple',
        description: 'Tile sample purple',
        showSource: true,
        template: `
            <sdc-tile>
                <sdc-tile-header>
                    <div class="purple">P</div>
                </sdc-tile-header>
                <sdc-tile-content>
                    <div class="sdc-tile-content-icon purple">
                        <div class="svg-icon-wrapper"  >
                            <svg class="svg-icon __vsp" viewBox="0 0 59.5 40" id="vsp_icon">
                                <title>
                                    vsp_new_icon
                                </title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="vlm_icon" data-name="vlm icon">
                                        <path d="M58.28,30.74c-1.49-1.82-3-2.7-4.67-2.74a8.5,8.5,0,0,0-16.22-2.44,6.93,6.93,0,0,0-4.06.66A7.23,7.23,0,0,0,36.42,40H53.5a6,6,0,0,0,6-6A5.18,5.18,0,0,0,58.28,30.74ZM53.5,38H36.42a5.25,5.25,0,0,1-5.21-5.91,5.32,5.32,0,0,1,3-4.06,5,5,0,0,1,2.21-.53,5.25,5.25,0,0,1,1.35.18l.92.24L39,27A6.5,6.5,0,0,1,51.67,29v1.3l1.17-.2c1-.17,2.17-.17,3.91,2a3.18,3.18,0,0,1,.76,2A4,4,0,0,1,53.5,38Z">
                                        </path>
                                        <path d="M49,0,4,.17A3.79,3.79,0,0,0,0,3.69V7.94H0v2H0V36.31C0,38.35,2,40,4.25,40l20.84-.08a1,1,0,0,0,0-1.92L4,38.08a1.89,1.89,0,0,1-2-1.76V10H51v7a1,1,0,0,0,2,0V3.53A3.79,3.79,0,0,0,49,0ZM2,8V3.76A1.89,1.89,0,0,1,4,2l45-.16a1.89,1.89,0,0,1,2,1.76V8Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="sdc-tile-content-info">
                        <span class="sdc-tile-info-line title">Router</span>
                        <div class="sdc-tile-info-line subtitle">test</div>
                    </div>
                </sdc-tile-content>
                <sdc-tile-footer>
                    <span class="sdc-tile-footer-cell"> Footer </span>
                </sdc-tile-footer>
            </sdc-tile>
        `
    },
    {
        id: 'tileSampleWithoutFooter',
        title: 'Tile sample without footer',
        description: 'Tile sample without footer',
        showSource: true,
        template: `
            <sdc-tile>
                <sdc-tile-header>
                    <div class="purple">P</div>
                </sdc-tile-header>
                <sdc-tile-content>
                    <div class="sdc-tile-content-icon purple">
                        <div class="svg-icon-wrapper"  >
                            <svg class="svg-icon __vsp" viewBox="0 0 59.5 40" id="vsp_icon">
                                <title>
                                    vsp_new_icon
                                </title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="vlm_icon" data-name="vlm icon">
                                        <path d="M58.28,30.74c-1.49-1.82-3-2.7-4.67-2.74a8.5,8.5,0,0,0-16.22-2.44,6.93,6.93,0,0,0-4.06.66A7.23,7.23,0,0,0,36.42,40H53.5a6,6,0,0,0,6-6A5.18,5.18,0,0,0,58.28,30.74ZM53.5,38H36.42a5.25,5.25,0,0,1-5.21-5.91,5.32,5.32,0,0,1,3-4.06,5,5,0,0,1,2.21-.53,5.25,5.25,0,0,1,1.35.18l.92.24L39,27A6.5,6.5,0,0,1,51.67,29v1.3l1.17-.2c1-.17,2.17-.17,3.91,2a3.18,3.18,0,0,1,.76,2A4,4,0,0,1,53.5,38Z">
                                        </path>
                                        <path d="M49,0,4,.17A3.79,3.79,0,0,0,0,3.69V7.94H0v2H0V36.31C0,38.35,2,40,4.25,40l20.84-.08a1,1,0,0,0,0-1.92L4,38.08a1.89,1.89,0,0,1-2-1.76V10H51v7a1,1,0,0,0,2,0V3.53A3.79,3.79,0,0,0,49,0ZM2,8V3.76A1.89,1.89,0,0,1,4,2l45-.16a1.89,1.89,0,0,1,2,1.76V8Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="sdc-tile-content-info">
                        <span class="sdc-tile-info-line title">Router</span>
                        <div class="sdc-tile-info-line subtitle">test</div>
                    </div>
                </sdc-tile-content>
            </sdc-tile>
        `
    },
    {
        id: 'tileSampleWithoutHeader',
        title: 'Tile sample without header',
        description: 'Tile sample without header',
        showSource: true,
        template: `
            <sdc-tile>
                <sdc-tile-content>
                    <div class="sdc-tile-content-icon purple">
                        <div class="svg-icon-wrapper"  >
                            <svg class="svg-icon __vsp" viewBox="0 0 59.5 40" id="vsp_icon">
                                <title>
                                    vsp_new_icon
                                </title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="vlm_icon" data-name="vlm icon">
                                        <path d="M58.28,30.74c-1.49-1.82-3-2.7-4.67-2.74a8.5,8.5,0,0,0-16.22-2.44,6.93,6.93,0,0,0-4.06.66A7.23,7.23,0,0,0,36.42,40H53.5a6,6,0,0,0,6-6A5.18,5.18,0,0,0,58.28,30.74ZM53.5,38H36.42a5.25,5.25,0,0,1-5.21-5.91,5.32,5.32,0,0,1,3-4.06,5,5,0,0,1,2.21-.53,5.25,5.25,0,0,1,1.35.18l.92.24L39,27A6.5,6.5,0,0,1,51.67,29v1.3l1.17-.2c1-.17,2.17-.17,3.91,2a3.18,3.18,0,0,1,.76,2A4,4,0,0,1,53.5,38Z">
                                        </path>
                                        <path d="M49,0,4,.17A3.79,3.79,0,0,0,0,3.69V7.94H0v2H0V36.31C0,38.35,2,40,4.25,40l20.84-.08a1,1,0,0,0,0-1.92L4,38.08a1.89,1.89,0,0,1-2-1.76V10H51v7a1,1,0,0,0,2,0V3.53A3.79,3.79,0,0,0,49,0ZM2,8V3.76A1.89,1.89,0,0,1,4,2l45-.16a1.89,1.89,0,0,1,2,1.76V8Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="sdc-tile-content-info">
                        <span class="sdc-tile-info-line title">Router</span>
                        <div class="sdc-tile-info-line subtitle">test</div>
                    </div>
                </sdc-tile-content>
                <sdc-tile-footer>
                    <span class="sdc-tile-footer-cell"> Footer </span>
                </sdc-tile-footer>
            </sdc-tile>
        `
    },
    {
        id: 'tileJustWithInfo',
        title: 'Tile just with info',
        description: 'Tile just with info',
        showSource: true,
        template: `
            <sdc-tile>
                <sdc-tile-content>
                    <div class="sdc-tile-content-icon purple">
                        <div class="svg-icon-wrapper"  >
                            <svg class="svg-icon __vsp" viewBox="0 0 59.5 40" id="vsp_icon">
                                <title>
                                    vsp_new_icon
                                </title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="vlm_icon" data-name="vlm icon">
                                        <path d="M58.28,30.74c-1.49-1.82-3-2.7-4.67-2.74a8.5,8.5,0,0,0-16.22-2.44,6.93,6.93,0,0,0-4.06.66A7.23,7.23,0,0,0,36.42,40H53.5a6,6,0,0,0,6-6A5.18,5.18,0,0,0,58.28,30.74ZM53.5,38H36.42a5.25,5.25,0,0,1-5.21-5.91,5.32,5.32,0,0,1,3-4.06,5,5,0,0,1,2.21-.53,5.25,5.25,0,0,1,1.35.18l.92.24L39,27A6.5,6.5,0,0,1,51.67,29v1.3l1.17-.2c1-.17,2.17-.17,3.91,2a3.18,3.18,0,0,1,.76,2A4,4,0,0,1,53.5,38Z">
                                        </path>
                                        <path d="M49,0,4,.17A3.79,3.79,0,0,0,0,3.69V7.94H0v2H0V36.31C0,38.35,2,40,4.25,40l20.84-.08a1,1,0,0,0,0-1.92L4,38.08a1.89,1.89,0,0,1-2-1.76V10H51v7a1,1,0,0,0,2,0V3.53A3.79,3.79,0,0,0,49,0ZM2,8V3.76A1.89,1.89,0,0,1,4,2l45-.16a1.89,1.89,0,0,1,2,1.76V8Z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="sdc-tile-content-info">
                        <span class="sdc-tile-info-line title">Router</span>
                        <div class="sdc-tile-info-line subtitle">test</div>
                    </div>
                </sdc-tile-content>
            </sdc-tile>`
    }
    ]);
