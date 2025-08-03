import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "initialize-discord-link",

  initialize() {
    console.log("✅ initializer loaded (modern)");

    withPluginApi("1.2", api => {
      api.decorateWidget("header:after", helper => {
        const username = helper.currentUser?.username;
        if (!username) {
          console.log("🚫 User not logged in, skipping Discord link");
          return;
        }

        console.log(`✅ Rendering Discord button for: ${username}`);

        return helper.h("div", { className: "header-link-discord" }, [
          helper.h("a", {
            href: `https://e8c97bb8-1cc2-4866-b1bc-513d7602d42d-00-2ebpesln4i3pc.janeway.replit.dev/auth/discord?discourse_user=${username}`,
            target: "_blank",
            title: "Link your Discord account",
            className: "btn btn-default",
            rel: "noopener noreferrer"
          }, "🎮")
        ]);
      });
    });
  }
};
