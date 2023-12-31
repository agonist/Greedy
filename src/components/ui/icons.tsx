import { SVGProps } from "react";

export function IcDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 15.248q-.162 0-.298-.053q-.137-.053-.267-.183l-2.62-2.62q-.146-.146-.152-.344q-.007-.198.152-.363q.166-.166.357-.169q.191-.003.357.163L11.5 13.65V5.5q0-.213.143-.357Q11.787 5 12 5t.357.143q.143.144.143.357v8.15l1.971-1.971q.146-.146.347-.153q.201-.007.367.159q.16.165.162.353q.003.189-.162.354l-2.62 2.62q-.13.13-.267.183q-.136.053-.298.053M6.615 19q-.69 0-1.152-.462Q5 18.075 5 17.385v-1.923q0-.214.143-.357q.144-.143.357-.143t.357.143q.143.143.143.357v1.923q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-1.923q0-.214.143-.357q.144-.143.357-.143t.357.143q.143.143.143.357v1.923q0 .69-.462 1.152q-.463.463-1.153.463z"
      ></path>
    </svg>
  );
}

export function IcImage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V7h14v14zm0-3h10l-3.4-4.5L9 17l-1.6-2.15zM5 5H3q0-.825.588-1.412T5 3zm2 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3q.825 0 1.413.588T21 5zm0 14h2q0 .825-.587 1.413T19 21zm0-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z"
      ></path>
    </svg>
  );
}
