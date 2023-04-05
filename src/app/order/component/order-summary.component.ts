import {Component, Input} from "@angular/core";
import {Order} from "../interfaces/order";

@Component({
  selector: 'order-summary',
  template:`
    <div class="row">
      <div class="col-12">
        <h4>
          <i class="fas fa-globe"></i> A-COMMERCE, Inc.
          <small class="float-right">Date: 2/10/2014</small>
        </h4>
      </div>
      <!-- /.col -->
    </div>
    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        <br>
        <b>Order ID:</b>{{order.id}}<br>
        <b>Payment Due:</b>{{order.paymentDue}}<br>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- Table row -->
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Qty</th>
            <th>Product</th>
            <th>Serial #</th>
            <th>Description</th>
            <th>Subtotal</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let item of order.items | async">
            <td>{{item.quantity}}</td>
            <td>{{item.title}}</td>
            <td>455-981-221</td>
            <td>{{item.image}}</td>
            <td>{{item.price}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->


    <!-- this row will not appear when printing -->
    <div class="row no-print">
      <div class="col-12">
        <a href="invoice-print.html" rel="noopener" target="_blank" class="btn btn-default"><i class="fas fa-print"></i> Print</a>
        <button type="button" class="btn btn-primary float-right" style="margin-right: 5px;">
          <i class="fas fa-download"></i> Generate PDF
        </button>
      </div>
    </div>
  `
})
export class OrderSummaryComponent {
  @Input() order :Order;
}
