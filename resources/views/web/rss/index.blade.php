@extends(TEMPLATE)
@section('content')
    <main class="container mt-4">
        <div class="d-flex flex-wrap">
            <div class="col-12 col-lg-8 px-0">
                <div>
                    <p>Khi số lượng website tin tức ngày càng nhiều, việc duyệt Web để tìm những thông tin bạn cần ngày càng mất nhiều thời gian. Liệu có tốt hơn không nếu các thông tin và dữ liệu mới nhất được gửi trực tiếp đến bạn, thay vì bạn phải tự dò tìm thông tin từ trang web này đến trang web khác? Giờ đây, bạn đã có thể sử dụng tiện ích này thông qua một dịch vụ cung cấp thông tin mới gọi là RSS.</p>
                    <p>Có nhiều ý kiến xung quanh vấn đề giải thích từ viết tắt RSS có nghĩa gì. Tuy nhiên đa số đồng ý rằng đây là từ viết tắt của Really Simple Syndication- Dịch vụ cung cấp thông tin cực kì đơn giản. Nói ngắn gọn, dịch vụ này cho phép bạn tìm kiếm thông tin cần quan tâm và đăng ký để được gửi thông tin đến trực tiếp. Dịch vụ này giúp bạn giải quyết vấn đề về tính cập nhật của thông tin bằng việc cung cấp cho bạn những thông tin mới nhất mà bạn đang quan tâm.</p>
                    <p>Hiện tại không phải bất cứ trang web nào cũng cung cấp RSS, nhưng dịch vụ này sẽ dần trở nên phổ biến. Nhiều trang web tin tức như BBC, CNN, và New York Times đang cung cấp RSS.</p>
                </div>

                <div class="pl-2">
                    <ul class="list-unstyled">
                        <li>
                            <a href="/rss/home.rss" target="_blank" class="text-decoration-none text-black3"><img src="/web/images/rss-icon.jpg" width="13" class="mr-2">TRANG CHỦ</a>
                        </li>
                        @foreach ($categories as $category)
                            <li>
                                <a href="/rss/{{$category->slug}}.rss" target="_blank" class="text-decoration-none text-black3"><img src="/web/images/rss-icon.jpg" width="13" class="mr-2">{{$category->title}}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>

                <div>
                    <p><strong>Làm cách nào để bắt đầu sử dụng các danh mục tin RSS?</strong></p>
                    <p>Nhìn chung, đầu tiên bạn cần có một thứ gọi là trình đọc tin (news reader). Có rất nhiều kiểu trình đọc tin, một số được nhúng trực tiếp trong trình duyệt, một số là các ứng dụng có thể tải về từ Internet. Tất cả những công cụ này sẽ giúp bạn có thể xem được thông tin và đăng kí sử dụng danh mục tin của RSS.</p>
                    <p>Sau khi bạn đã chọn được một trình đọc tin, tất cả những gì bạn phải làm là lựa chọn nội dung thông tin mà bạn cần. Ví dụ như bạn cần thông tin mới nhất về công nghệ thông tin, bạn có thể sử dụng nút RSS màu cam. Có thể kéo/thả nút này vào trong trình đọc tin của bạn, hoặc cắt/dán Url vào chức năng thêm danh mục tin của trình đọc tin.</p>
                    <p>Một số trình duyệt, trong đó có Firefox, Opera và Safari, có chức năng tự động chọn danh mục tin RSS cho bạn. Nếu cần biết thông tin cụ thể hơn, bạn có thể xem thông tin trên các trang chủ của các trình duyệt đó.</p>
                    <p>Có rất nhiều loại trình đọc tin khác nhau và các phiên bản được thường xuyên cập nhật. Mỗi loại trình đọc tin lại đòi hỏi một hệ điều hành khác nhau, do đó bạn phải cân nhắc về điều đó khi lựa chọn trình đọc tin.</p>
                </div>
            </div>
            @include('web.block._sidebar')
        </div>
    </main>
@endsection
