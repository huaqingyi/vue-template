declare module '*.vue' {
  import Vue from 'vue';
  export default class extends Vue {
    public getDOMXY: (args: any) => any;
    public rootComp: any;
  }
}
