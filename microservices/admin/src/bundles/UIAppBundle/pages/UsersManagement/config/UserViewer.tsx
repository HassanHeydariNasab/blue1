import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { User } from "@bundles/UIAppBundle/collections";
import { UserViewer as BaseUserViewer } from "./UserViewer.base";

@Service({ transient: true })
export class UserViewer extends BaseUserViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<User> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
