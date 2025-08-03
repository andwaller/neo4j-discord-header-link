import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class DiscordLinkIcon extends Component {
  @service currentUser;

  get isLoggedIn() {
    return this.currentUser?.username;
  }

  get oauthLink() {
    const username = this.currentUser?.username;
    return `https://e8c97bb8-1cc2-4866-b1bc-513d7602d42d-00-2ebpesln4i3pc.janeway.replit.dev/auth/discord?discourse_user=${username}`;
  }
}