
import { Stack, StackProps } from 'aws-cdk-lib';
import { IpAddresses, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class NetworkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Vpc(this, 'Vpc', {
        ipAddresses: IpAddresses.cidr('10.0.0.0/16'),
        maxAzs: 2,
        subnetConfiguration: [
            {name:'public-subnet', subnetType: SubnetType.PUBLIC},
            {name: 'private-subnet', subnetType: SubnetType.PRIVATE_ISOLATED}
        ],
        natGateways: 1
      })
  }
}
