<div class="col-12 my-3">
    <b>Nội dung Content</b>
</div>
<div class="col-12 col-lg-6">
    <span>Content</span>
    <textarea type="text" class="form-control" name="content" required>{{$oneItem->content ?? ''}}</textarea>
</div>
<div class="col-3 col-lg-1">
    <span>Width</span>
    <input required type="number" min="1" class="form-control" name="width" value="{{$oneItem->width ?? ''}}">
</div>
<div class="col-3 col-lg-1">
    <span>Height</span>
    <input required type="number" min="1" class="form-control" name="height" value="{{$oneItem->height ?? ''}}">
</div>
