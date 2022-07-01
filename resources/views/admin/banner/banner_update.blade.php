@extends('admin.layout')
@section('content')
    <main class="c-main">
        <div class="container-fluid">
            <div class="fade-in">
                <form method="post" action="">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header"><strong>{{!empty($oneItem) ? 'Chỉnh sửa' : 'Thêm mới'}} Banner</strong></div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <b>Tiêu đề Banner</b>
                                                <input name="title" class="form-control" value="{{$oneItem->title ?? ''}}">
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <label>Website</label>
                                                <select name="id_website" class="form-control">
                                                    @if(!empty($allSite))
                                                        @foreach($allSite as $item)
                                                            <option @if(!empty($oneItem) && $oneItem->id_website == $item->id) selected @endif
                                                            value="{{$item->id}}">{{$item->title}}</option>
                                                        @endforeach
                                                    @endif
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <label>Vị trí</label>
                                                <select name="id_position" class="form-control">
                                                @if(!empty($allPosition))
                                                    @foreach($allPosition as $item)
                                                        <option @if(!empty($oneItem) && $oneItem->id_position == $item->id) selected @endif
                                                        value="{{$item->id}}">{{$item->title}}</option>
                                                    @endforeach
                                                @endif
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <span>STT</span>
                                            <input type="number" class="form-control" min="0" name="order" value="{{ $oneItem->order ?? 0 }}">
                                        </div>
                                        <div class="col-3">
                                            <span>Start date</span>
                                            <input type="datetime-local" class="form-control" name="start_date" value="{!! date('Y-m-d\TH:i', strtotime($oneItem->start_date ?? 'now')) !!}">
                                        </div>
                                        <div class="col-3">
                                            <span>End date</span>
                                            <input type="datetime-local" class="form-control" name="end_date" value="{!! date('Y-m-d\TH:i', strtotime($oneItem->end_date ?? '+7 day')) !!}">
                                        </div>
                                        <div class="col-3">
                                            <div>On/Off</div>
                                            <input type="checkbox" name="status" @if(!empty($oneItem) && $oneItem->status == 1) checked @endif>
                                        </div>

                                        <div class="col-12 my-3">
                                            <b>Nội dung link</b>
                                        </div>
                                        <div class="col-6">
                                            <span>Link</span>
                                            <input type="text" class="form-control" name="link" value="{{$oneItem->link ?? ''}}">
                                        </div>
                                        <div class="col-2">
                                            <span>Target</span>
                                            <input class="form-control" type="text" name="target" value="{{$oneItem->target ?? ''}}">
                                        </div>
                                        <div class="col-2">
                                            <span>Rel</span>
                                            <input class="form-control" type="text" name="rel" value="{{$oneItem->rel ?? ''}}">
                                        </div>

                                        <div class="col-12 my-3">
                                            <b>Nội dung ảnh banner</b>
                                        </div>
                                        <div class="col-6">
                                            <label>Image</label>
                                            @if(!empty($oneItem->image))
                                                <img style="width: 150px" src="{{$oneItem->image}}" id="lbl_img" class="img-fluid d-block" onclick="upload_file('chosefile','img')">
                                            @else
                                                <img style="width: 150px" src="{{url('admin/images/no-image.jpg')}}" id="lbl_img" class="img-fluid d-block" onclick="upload_file('chosefile','img')">
                                            @endif
                                            <input type="hidden" name="image" id="hd_img" value="{{$oneItem->image ?? ''}}" required>
                                        </div>
                                        <div class="col-2">
                                            <span>Alt</span>
                                            <input type="text" class="form-control" name="alt" value="{{$oneItem->alt ?? ''}}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group float-right">
                            <button type="submit" class="btn btn-primary">Lưu trữ</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
@endsection
