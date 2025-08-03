import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "initialize-discord-link",

  initialize() {
    withPluginApi("1.2", api => {
      api.decorateWidget("header-icons:before", helper => {
        const username = helper.currentUser?.username;
        if (!username) return;

        return helper.h("li.header-link-discord", [
          helper.h("a", {
            href: `https://e8c97bb8-1cc2-4866-b1bc-513d7602d42d-00-2ebpesln4i3pc.janeway.replit.dev/auth/discord?discourse_user=${username}`,
            target: "_blank",
            title: "Link your Discord account",
            className: "btn btn-default",
            rel: "noopener noreferrer"
          }, [
            helper.h("svg", {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                height: "20",
                viewBox: "0 0 24 24",
                width: "20",
                fill: "currentColor"
              }
            }, [
              helper.h("path", {
                attrs: {
                  d: "M22 24H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h20c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2z",
                  fill: "#7289DA"
                }
              }),
              helper.h("path", {
                attrs: {
                  fill: "#fff",
                  d: "M17.472 6.212a13.227 13.227 0 00-3.257-1.011..."
                }
              })
            ])
          ])
        ]);
      });
    });
  }
};
